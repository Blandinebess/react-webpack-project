export default function Card({ title, body }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <h3>love to learn new staff</h3>
      <p>{body}</p>
      <Card
        title="React learning✅"
        body="Trying to add a new card to my project."
      />
    </article>
  );
}
