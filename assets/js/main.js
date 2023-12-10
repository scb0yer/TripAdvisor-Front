// écoute de l'évènement DOMContentLoaded signifiant que mon DOM est construit

document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded");

  // écoute de l'évènement de click sur mon bouton #contact
  document.querySelector("#contact").addEventListener("click", () => {
    console.log("un clic a été entendu");
    document.querySelector("#contact-form").classList.toggle("hidden");
    document.querySelector("#page").classList.add("disappear");
    document.querySelector("#body").classList.add("unscroll");
  });

  document.querySelector("#close").addEventListener("click", () => {
    document.querySelector("#contact-form").classList.add("hidden");
    document.querySelector("#page").classList.remove("disappear");
    document.querySelector("#body").classList.remove("unscroll");
  });

  // écoute d'un évènement submit dans le form
  document.querySelector("form").addEventListener("submit", async (event) => {
    // empecher le refresh de la page au subit
    event.preventDefault();

    console.log("submit");

    // je récupère la value de mes inputs
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // j'envoie vers mon back ma data =>
    const { data } = await axios.post("http://localhost:3002/form", {
      firstname,
      lastname,
      email,
      message,
    });

    console.log("reponse ====>", data);

    // console.log(firstname);
  });
});
