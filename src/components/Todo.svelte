<script>
    export let text;

    export let remove;
</script>

<div class="todo-item">
    <div class="text-box">
        <span>
            {text}
        </span>
    </div>
    <button class="remove-btn" on:click={remove}>
        DELETE
    </button>
</div>

<style>
    .todo-item{
        width: 100%;
        min-height: 50px;
        border-radius: 6px;
        transition: 0.3s;
        display: flex;
        align-items: center;
        background-color: brown;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        border-bottom: 4px solid skyblue;
    }
    .todo-item:hover{
        transition: 0.3s;
        opacity: 0.9;
    }
    .text-box{
        color: white;
        font-weight: bold;
        font-family: cursive;
        width: 100%;
        padding-right: 100px;
    }
    .remove-btn{
        padding-left: 20px;
        padding-right: 20px;
        font-weight: bold;
        height: 35px;
        position: relative;
        color: brown;
        cursor: pointer;
        background-color: white;
        border: 2px solid skyblue;
    }
</style>