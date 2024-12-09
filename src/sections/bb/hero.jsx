import { Link } from 'react-router-dom';
export const Hero = () => {
  const inlineStyle = {
    borderRadius: '0',
    color: '#7592F8'
  };
  return (
    <section className="w-full hero-section inner gallery-bg bg-bb" style={inlineStyle}>
      <div className="template-container">
        <div>
            <img src="./images/bb/logo.png" alt="" />
            <h2 className="section-title-h2 inner">Team Collaboration Project</h2>
            <p className="body-text-p1">Managing finances can be overwhelming for individuals, families, and small groups. BudgetBuddy simplifies this process, making budgeting, expense tracking, and goal management. With personalized insights, our app empowers users to reduce stress and confidently achieve their financial goals.</p>
            <p className="body-text-p3 pt-5">
              <Link className="btn-green mr-4" to="https://budget-buddy.ca" target="_blank">Website</Link>
              <Link className="btn-green" to="https://drive.google.com/file/d/1MH77n_kgjjLJ5X5eJzlX0ua73PCHTzto/view" target="_blank">Project Manual</Link>
            </p>
        </div>
        <div>
          <img src="./images/bb/hero-image.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
