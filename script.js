function smoothScroll(targetSectionId) {
  const targetSection = document.getElementById(targetSectionId); 
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetPosition = targetSection.offsetTop;
  const distance = targetPosition - scrollTop;
  let currentScroll = 0; 

  const animationLoop = setInterval(() => {
      currentScroll += 10; // Adjust scroll speed 
      window.scrollTo(0, currentScroll + scrollTop);

      if (currentScroll >= distance) {
          clearInterval(animationLoop);
      }
  }, 10); // Adjust animation interval for smoothness
}
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default jump
        const sectionId = link.getAttribute('href').slice(1); // Extract the ID
        smoothScroll(sectionId); 
    });
});
function handleScroll() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.offsetTop; 
      const sectionBottom = sectionTop + section.offsetHeight; 

      // Adjust fade threshold (experiment with different values)
      const fadeThreshold = 0.2; // 20% of section height

      if (window.scrollY > sectionTop - windowHeight * (1 - fadeThreshold) &&
          window.scrollY < sectionBottom - windowHeight * fadeThreshold) {

          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
}


window.addEventListener('scroll', handleScroll);
