import faker from 'faker';



const mount = (el)=>{
    const cartTaker = `<div>You have ${faker.random.number()}</div>`;
    el.innerHTML = cartTaker;
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart');
    if(el){
        mount(el);
    }
}

export {mount};