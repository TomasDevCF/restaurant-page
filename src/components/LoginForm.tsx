import { useState, type FormEvent } from "react";
import RadioCard from "./RadioCard";

export default function Form() {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {

  }

  return (
    <form className="w-full min-h-[600px] gap-8 flex flex-col relative z-40 items-center justify-center" onSubmit={handleSubmit}>
      <div className="w-full max-w-[700px] shadow-2xl bg-white md:rounded-md p-4">
        <h1 className="text-5xl">Ingrese el codigo</h1>
        <label htmlFor="code">Ingrese el codigo para entrar</label>
        <input type="text" placeholder="Codigo" name="code" className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5" />
      </div>
    </form>
  )
}