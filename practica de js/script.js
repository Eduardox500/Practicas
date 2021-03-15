const tarjeta = document.getElementById("tarjeta");
tarjeta.setAttribute("align","center");
tarjeta.setAttribute("style","background-color: rgb(240, 240, 240); width: 450px; height: 530px; margin-left: auto; margin-right: auto;");




let img = document.createElement("img");
tarjeta.appendChild(img);
img.setAttribute("src","imagen clipart.jpg");
img.setAttribute("width","300");
img.setAttribute("style","margin-top: 50px;");
img.setAttribute("id","img");

let h1 = document.createElement("h1");
tarjeta.appendChild(h1);
h1.innerHTML = "Lorem, ipsum dolor sit amet."
img.setAttribute("id","h1");

let p = document.createElement("p");
tarjeta.appendChild(p);
p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque, quisquam a quae vitae iure inventore laudantium fugiat unde quam sunt deleniti eum asperiores aspernatur. Fugiat, ipsum velit? Veritatis, eveniet?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quod consectetur similique possimus ea! Facere perferendis recusandae assumenda velit tempore, pariatur officiis eveniet cumque aspernatur maxime unde minus temporibus obcaecati?"
p.setAttribute("align","left");
p.setAttribute("style","margin-left: 20px; margin-right: 20px;");
p.setAttribute("id","p");

let boton = document.createElement("div");
tarjeta.appendChild(boton);
boton.innerHTML = "Leer mas"
boton.setAttribute("style","background-color: red; width: 150px; color: white; border-radius: 15px; user-select: none; font-size: 25px;");
boton.setAttribute("id","boton");