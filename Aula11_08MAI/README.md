# Aula 11 (08/05) - Todo List

# Template Projeto - Vite + React + WindCSS + Iconify

[link](https://github.com/mmamorim/bootstrapreact)

# Vamos montar um TodoList ?

> TaskForm

~~~jsx
<div className="border border-black p-2 rounded m-2 md:w-120">
    <div>
        Digite o nome da tarefa
    </div>
    <hr className="my-1" />
    <div className="flex items-center gap-2 my-2">
        <div>
            Tarefa:
        </div>
        <input type="text" className="border border-black p-1 w-45" />
        <button className="border border-black px-1 rounded">
            Adicionar
        </button>
    </div>
</div>
~~~

> Item

~~~jsx
<div className="bg-gray-200 p-2 rounded my-1 flex items-center justify-between">
    <div>
        Uma tarefa
    </div>
    <div className="flex items-center gap-2">
        <div className="border border-black rounded-2xl px-1.5 pt-1 bg-gray-800 text-white">
            <Icon icon="mdi:delete" />
        </div>
        <div className="border border-black rounded-2xl px-1.5 pt-1 bg-green-800 text-white">
            <Icon icon="mdi:check" />
        </div>
    </div>
</div>
~~~