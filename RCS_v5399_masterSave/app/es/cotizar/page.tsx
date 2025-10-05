export const dynamic = 'force-static';
export default function Page(){
  return (
    <main className="container">
      <h1>Solicitar Cotización</h1>
      <form action="/.netlify/functions/send-lead" method="post" encType="multipart/form-data">
        <input type="hidden" name="formType" value="Quote (ES)" />
        <label>Name<input name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Phone<input name="phone" /></label>
        <label>Message<textarea name="message" rows={4} /></label>
        <button className="button primary" type="submit">Send</button>
      </form>
    </main>
  );
}
