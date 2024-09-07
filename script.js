document.addEventListener('DOMContentLoaded', () => {
    const dropDown = document.querySelector('.drop-down');
    const dropLink1 = document.querySelector('.drop-links')
    const dropDown2 = document.querySelector('.drop-down-2');
    const dropLink2 = document.querySelector('.drop-link-2');

    dropDown.addEventListener('click', () => {
        dropLink1.classList.toggle('active');
        dropDown.classList.toggle('list');
    });

    dropDown2.addEventListener('click', () => {
        dropLink2.classList.toggle('active');
        dropDown2.classList.toggle('list');
    });

    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.navbar--links');
    const closeBtn = document.getElementById('closeBtn')
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.add('open');
    })

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('open');
    })
});