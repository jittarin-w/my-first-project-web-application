import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
const port = 3000;

// Middleware ที่ทำให้เราสามารถใช้ JSON ได้
app.use(express.json());

// Middleware เพื่อแก้ปัญหา CORS (สำคัญมากในการทำงานระหว่าง Frontend-Backend)

app.use(cors());

// สร้าง API Endpoint สำหรับดึงข้อมูลผู้ใช้
app.get('/users', async (req, res) => {
    try {
        // ดึงข้อมูลจาก API สาธารณะ
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        // ส่งข้อมูลผู้ใช้กลับไปให้ Frontend
        res.json(users);
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
        res.status(500).send('เกิดข้อผิดพลาดกับ Server' + error.message) ;
    }
});

// ให้ Server เริ่มทำงาน
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});