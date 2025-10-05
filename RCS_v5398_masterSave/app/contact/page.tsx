export const dynamic = 'force-static';
export default function Page() {
  return (
    <main>
      <h1>Contact</h1>
      <form className="form" action="/.netlify/functions/send-lead" method="post" encType="multipart/form-data">
        <input type="hidden" name="formType" value="Contact" />
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone" />
        <textarea name="message" placeholder="Message / Scope" rows=6 />
        <label>Attachment <input name="file" type="file" /></label>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
