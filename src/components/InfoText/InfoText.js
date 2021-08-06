import "./style.scss";

export default function InfoText({ title, text }) {
  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      <div id="text">{text}</div>
    </section>
  );
}
