import React from "react";

function AfterEffectsPage() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen sans">
      <div className="container mx-auto p-5 md:px-32">
        <h1 className="text-4xl font-bold mb-10">After Effects Templates & Resources</h1>
        <p className="text-lg md:text-center mb-10">
          Explore a collection of After Effects templates, tutorials, plugins, and learning resources to help you master motion graphics and visual effects.
        </p>

        {/* After Effects Templates */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-5">After Effects Templates</h2>
          
          <h3 className="text-xl font-semibold mb-4">Free Resources</h3>
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://mixkit.co/free-after-effects-templates/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Mixkit After Effects Templates
              </a> - Free templates including intros, transitions, and titles.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.videezy.com/after-effects-templates" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Videezy After Effects Templates
              </a> - Free video effects and After Effects templates.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://motionarray.com/browse/ae-templates/free" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Motion Array Free Templates
              </a> - Free templates with premium options available.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Paid Resources</h3>
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://elements.envato.com/after-effects-templates" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Envato Elements After Effects
              </a> - Subscription service with a vast library of After Effects templates.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://videohive.net/category/after-effects-project-files" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                VideoHive After Effects Templates
              </a> - Pay-per-template marketplace with high-quality After Effects resources.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://stock.adobe.com/after-effects-templates" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Adobe Stock After Effects
              </a> - Offers both free and premium After Effects templates.
            </li>
          </ul>
        </div>

        {/* Tutorials */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-5">Tutorials</h2>
          
          <h3 className="text-xl font-semibold mb-4">Beginner Tutorials</h3>
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://helpx.adobe.com/after-effects/tutorials.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Adobe Learn After Effects
              </a> - Official Adobe tutorials for learning After Effects.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.youtube.com/user/ECAbrams" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Evan Abrams on YouTube
              </a> - Beginner to advanced After Effects tutorials.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.schoolofmotion.com/courses/after-effects-kickstart" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                School of Motion After Effects
              </a> - Paid courses with some free resources for beginners.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Advanced Tutorials</h3>
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.videocopilot.net/tutorials/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Video Copilot Tutorials
              </a> - Offers in-depth tutorials on various effects and techniques.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://motiondesign.school/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Motion Design School
              </a> - Advanced courses on motion graphics and animation.
            </li>
          </ul>
        </div>

        {/* Plugins */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-5">Plugins and Add-Ons</h2>
          
          <h3 className="text-xl font-semibold mb-4">Free Plugins</h3>
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://aejuice.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                AEJuice Free Plugins
              </a> - Free pack with various tools and plugins for After Effects.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://pixflow.net/motion-factory/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Motion Factory
              </a> - Free toolset for motion designers.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">Premium Plugins</h3>
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.redgiant.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Red Giant Plugins
              </a> - Industry-standard plugins for motion graphics and visual effects.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.videocopilot.net/products/element2/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Element 3D
              </a> - 3D object rendering and animation plugin by Video Copilot.
            </li>
          </ul>
        </div>

        {/* Learning Platforms */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-5">Learning Platforms</h2>
          
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.linkedin.com/learning/topics/after-effects" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                LinkedIn Learning After Effects
              </a> - Offers structured courses on After Effects, ranging from beginner to advanced.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.udemy.com/topic/after-effects/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Udemy After Effects Courses
              </a> - A wide range of courses for all skill levels, often at discounted prices.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.skillshare.com/browse/after-effects" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Skillshare After Effects
              </a> - Thousands of classes on After Effects, from basics to advanced techniques.
            </li>
          </ul>
        </div>

        {/* Community and Forums */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-5">Community and Forums</h2>
          
          <ul>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://forums.creativecow.net/adobe_after_effects" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Creative COW After Effects Forum
              </a> - Active community for After Effects users.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://www.reddit.com/r/AfterEffects/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Reddit After Effects
              </a> - Community for sharing work, tips, and asking questions.
            </li>
            <li className="bg-white p-4 rounded shadow mb-4">
              <a href="https://motiondesigners.community/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                Motion Design Community
              </a> - A global community of motion designers sharing resources and inspiration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AfterEffectsPage;
