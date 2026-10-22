const navigation = document.getElementById('navigation');
const toggle = document.querySelector('.menu-toggle');
const groups = [...document.querySelectorAll('.nav-group')];
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
groups.forEach(group => group.addEventListener('toggle', () => { if(group.open) groups.forEach(other => { if(other !== group) other.open = false; }); }));
document.addEventListener('click', event => { if(!navigation.contains(event.target)) groups.forEach(group => group.open = false); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') { const openGroup = groups.find(group => group.open); if(openGroup) { openGroup.open = false; openGroup.querySelector('summary').focus(); } else if(navigation.classList.contains('open')) { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.focus(); } } });
