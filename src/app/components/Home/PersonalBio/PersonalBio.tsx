import homeStyles from "../home.module.css";

export const PersonalBio = () => {
  return (
    <section className={homeStyles.section}>
      <h1 className={homeStyles.title}>Interests</h1>
      <div className={homeStyles.textGroup}>
        <p className={homeStyles.text}>
          {" "}
          Outside of work, I enjoy hiking, running and leanring languages.
        </p>
        <p className={homeStyles.text}>
          I can speak advanced German and intermediate Fremch.
        </p>
      </div>
    </section>
  );
};

export default PersonalBio;
