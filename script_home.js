// تحقق مما إذا كان الوضع الداكن مفعلًا من قبل
let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// دالة لتبديل الوضع الداكن
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block'; // عرض النافذة
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none'; // إخفاء النافذة
}

function saveSettings() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;

    // هنا يمكنك إضافة الكود لحفظ البيانات

    closeSettings(); // إغلاق النافذة بعد الحفظ
}

function goToCamera() {
    // هنا يمكن إضافة الكود للانتقال إلى صفحة الكاميرا
}

function goToHome() {
    window.location.href = 'file:///file:///C:/Users/Administrator/Desktop/ConnectHub1/home/index.html'; // الانتقال إلى الصفحة الرئيسية
}

function goToChat() {
    window.location.href = 'C:/Users/mo/Desktop/ConnectHub/seting.app/index.html'; // الانتقال إلى صفحة الرسائل
}

// إضافة حدث تمرير
const feed = document.querySelector('.feed');
feed.addEventListener('scroll', () => {
    
    if (feed.scrollHeight - feed.scrollTop <= feed.clientHeight + 10) {
        // هنا يمكنك إضافة تأثيرات عند الوصول لأسفل القائمة
        console.log("وصلت إلى آخر البوستات!");
        // يمكنك إضافة المزيد من التأثيرات هنا
    }
});
let lastScrollTop = 0; // لتتبع موضع التمرير

window.addEventListener('scroll', function() {
    const searchBar = document.getElementById('searchBar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // تمرير لأسفل
        searchBar.style.display = 'none'; // إخفاء مربع البحث
    } else {
        // تمرير لأعلى
        searchBar.style.display = 'block'; // إظهار مربع البحث
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // لتعقب موضع التمرير
});




const storyBar = document.querySelector('.story-bar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // إذا كان التمرير لأسفل
        storyBar.classList.add('hide'); // أضف الفئة لإخفاء الشريط
    } else {
        // إذا كان التمرير لأعلى
        storyBar.classList.remove('hide'); // أزل الفئة لإظهار الشريط
    }
    
    lastScrollTop = scrollTop; // تحديث موضع التمرير
});
