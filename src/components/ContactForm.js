import "./ContactForm.css";

export default function ContactForm() {
  return (
    <>
      <h1>contact me</h1>
      <form id="contact-form" onSubmit={submitForm} method="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Deo"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="example@example.com"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="msg">Your message</label>
          <br></br>
          <textarea
            name="msg"
            id="msg"
            placeholder="Your message here ..."
            required
          ></textarea>
        </div>
        <button>SEND</button>
      </form>
    </>
  );
}

function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById("contact-form");
  const data = JSON.stringify({
    name: form[0].value,
    mail: form[1].value,
    msg: form[2].value,
  });

  fetch("http://127.0.0.1:23353/api/sendmail", {
    method: "POST",
    headers: { Accept: "application.json", "Content-Type": "application/json" },
    body: data,
  }).then((res) => {
    if (!res.ok) {
      var e;
      if (
        !document.getElementById("success") ||
        !document.getElementById("fail")
      ) {
        e = document.createElement("div");
      }
      e.id = "fail";
      e.innerHTML = `Your message is not sent.
        something went wrong.
        
        You can contact me directly on
        <a href="mailto:sul.otaibi@outlook.sa">sul.otaibi@outlook.sa</a>`;
      document.getElementById("success") ||
        document.getElementById("fail") ||
        form.appendChild(e);
    } else {
      if (!document.getElementById("success")) {
        const e = document.createElement("div");
        e.id = "success";
        e.innerText = `Your message is sent.
        Thank you for your time.`;
        form.appendChild(e);
      }
      form[0].value = "";
      form[1].value = "";
      form[2].value = "";
    }
  });
}
