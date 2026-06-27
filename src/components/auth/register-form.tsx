'use client'

import { login } from "@/actions/login"
import { register } from "@/actions/register"
import { setAuthCookie } from "@/actions/set-auth-cookies"
import { useAuthStore } from "@/store/auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ChangeEvent, FormEvent, useState, useTransition } from "react"
import z from "zod"

const schema = z.object({
    name: z.string().min(2, {message: "Nome deve ter pelo menos 2 caracteres"}),
    email: z.email({message: "E-mail inválido"}),
    password: z.string().min(6,{message: 'Senha deve ter pelo menos 6 caracteres'}),
    confirmPassword: z.string()
}).refine(data => data.password === data. confirmPassword, {
    message: ' As senhas não coincidem',
    path: ['confirmPassword']
})

type ErrorStructure ={
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    form?: string

}

export const RegisterForm = () => {
    const [form, setForm] = useState({name: '',email: '', password: '', confirmPassword: ''})
    const [errors, setErrors] = useState<ErrorStructure>({})
    const [pending, startTransition] = useTransition()
    const authStore = useAuthStore(state => state)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(form => ({...form, [e.target.name]: e.target.value}))
        setErrors(errors => ({...errors, [e.target.name]:undefined, form: undefined}))
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = schema.safeParse(form);
        if(!result.success) {
            const fieldErrors:any = {};
            result.error.issues.forEach(err => {
                if(err.path[0]){
                    fieldErrors[err.path[0]] = err.message
                }
            })
            setErrors(fieldErrors)
            return
        }

        setErrors({})
        startTransition(async () => {
            const res = await register(form);
            if(res.error) {
                setErrors({form: res.error})
            }else {
                redirect('/login')
            }

        })
    }

    return(
        <form onSubmit={handleSubmit} className="bg-white border-gray-300 p-8 rounded-sm">
            <h2 className="text-xl font-bold mb-4">Cadastro</h2>
            <div className="mb-4">
                <label className="mb-1">Nome</label>
                <input disabled={pending} autoFocus className=" w-full border rounded px-3 py-2" type="text" name="name" value={form.name} onChange={handleChange}/>
                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div> }
            </div>
            <div className="mb-4">
                <label className="mb-1">E-mail</label>
                <input disabled={pending} className=" w-full border rounded px-3 py-2" type="email" name="email" value={form.email} onChange={handleChange}/>
                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div> }
            </div>
            <div className="mb-4">
                <label className="mb-1">Senha</label>
                <input disabled={pending} className="w-full border rounded px-3 py-2" type="password" name="password" value={form.password} onChange={handleChange}/>
                {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div> }
            </div>
            <div className="mb-4">
                <label className="mb-1">Confirmar Senha</label>
                <input disabled={pending} className="w-full border rounded px-3 py-2" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}/>
                {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div> }
            </div>
            <button type="submit" disabled={pending} className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded">
                {pending ? 'cadastrando...': 'Cadastrar'}
            </button>
            {errors.form && <div className="text-red-500 text-sm my-1">{errors.form}</div>}
            <div className="text-center mt-4">
                <Link className="text-gray-500 text-sm" href={('/login')}>Já tem conta?</Link>
            </div>
        </form>
    )
}