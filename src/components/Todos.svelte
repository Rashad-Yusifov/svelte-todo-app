<script>
    import Todo from './Todo.svelte';
    import {todoState} from '../store/index';

    let todoText = '';

    const addTodo = () => {
        $todoState = [
            ...$todoState,
            todoText
        ]
        todoText = '';
    }
    
    const removeTodo = (index) => {
        let newData = [...$todoState];
        newData.splice(index, 1);
        $todoState = newData;
    }

</script>

<section class="todo-box">
    <div class="inner-box">

        {#if $todoState.length < 1}
            <p class="no-item"> 
                There is not any item
            </p>
        {:else}
            <div class="todo-list">
                {#each $todoState as item, index}
                    <Todo remove={() => removeTodo(index)} text={item}/>
                {/each}
            </div>
        {/if}
       

        <div class="flex-bottom-box">
            <div class="input-box">
                <input type="text" bind:value={todoText} placeholder="Add somethings">
            </div>
            <div class="button-box">
                <button on:click={addTodo} disabled={todoText.trim() == ''}>Add todo</button>
            </div>
        </div>


    </div>
</section>

<style>
    .todo-box{
        width: 100%;
        height: 100%;
        padding-top: 90px;
        box-sizing: border-box;
        min-height: 100vh;
        position: relative;
        border: 10px solid skyblue;
        background-color: brown;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inner-box{
        border-radius: 10px;
        min-width: 700px;
        padding: 20px;
        background-color: white;
        max-width: 700px;
    }
    .flex-bottom-box{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
    }
    .input-box{
        width: 80%;
        box-sizing: border-box;
        padding-right: 20px;
        position: relative;
    }
    .input-box input{
        width: 100%;
        height: 38px;
        border-radius: 6px;
        font-weight: bold;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        border: 2px dashed skyblue;
        position: relative;
    }
    .button-box{
        width: 20%;
    }
    
    .button-box button{
        width: 100%;
        height: 40px;
        cursor: pointer;
        font-weight: bold;
        color: white;
        background-color: brown;
        border: 2px solid skyblue;
        border-radius: 6px;
        outline: none;
    }
    .button-box button:disabled{
        opacity: 0.6;
        cursor: no-drop;
    }
    .todo-list{
        margin-bottom: 30px;
        position: relative;
        width: 100%;
    }
    .no-item{
        text-align: center;
        margin: 0;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        padding-top: 20px;
        font-family: 'Times New Roman', Times, serif;
        color: skyblue;
        padding-bottom: 30px;
    }
</style>
