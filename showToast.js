export function showToast(operation,id){
    const toast = document.createElement("div");
    toast.classList.add("toast");



    if(operation ==="add"){
   toast.textContent = `product ${id} added`;
    } else{
        toast.textContent = `product ${id} deleted`;
    }

    document.body.appendChild(toast);


    setTimeout(()=>{
        toast.remove();
    },2000);

};