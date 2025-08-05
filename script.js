const heading = document.getElementById('main-heading');
const button = document.getElementById('change-text-btn');

// button.addEventListener('click',() => {
//     heading.textContent = 'Text already changing';
//     heading.style.color = 'blue';
// });

// 1. สร้างฟังก์ชัน async เพื่อดึงข้อมูลจาก API
// async function fetchUsers() {
//     try {
//         // 2. ใช้ fetch เพื่อเรียก API และรอผลลัพธ์
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json(); // แปลงข้อมูลที่ได้เป็น JSON

//         // 3. แสดงข้อมูลลงในหน้าเว็บ
//         const userList = document.getElementById('user-list');
//         users.forEach(user => {
//             const userElement = document.createElement('div');
//             userElement.textContent = `ชื่อ: ${user.name}, อีเมล: ${user.email}, ที่อยู่: ${user.address.street}`;
//             userList.appendChild(userElement);
//         });

//     } catch (error) {
//         console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
//     }
// }

// 1. สร้างฟังก์ชัน async เพื่อดึงข้อมูลจาก Backend ของเรา
async function fetchUsersFromBackend() {
    try {
        // 2. ใช้ fetch เพื่อเรียก Endpoint ของเราเอง
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        // 3. แสดงข้อมูลลงในหน้าเว็บ
        const userList = document.getElementById('user-list');
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.textContent = `ชื่อ: ${user.name}, อีเมล: ${user.email}, ที่อยู่: ${user.address.street}`;
            userList.appendChild(userElement);
        });

    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลจาก Backend:', error);
    }
}

// 4. เรียกใช้ฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
fetchUsersFromBackend();