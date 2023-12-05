const prevButton = document.querySelector('.js-prevButton');
        const nextButton = document.querySelector('.js-nextButton');
        const radioButtons = document.querySelectorAll('input[name="button"]');
        let currentIndex = 0;

        document.getElementById('radio1').checked = true;
        // Function để cập nhật radio button hiện tại
        function updateCurrentRadio() {
            for (let i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    currentIndex = i;
                    break;
                }
            }
        }

        // Bắt sự kiện click trên prevButton
        prevButton.addEventListener('click', function () {
            updateCurrentRadio();
            // Di chuyển tới slide trước đó (hoặc về slide cuối cùng nếu đã ở slide đầu tiên)
            currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
            radioButtons[currentIndex].checked = true;
        });

        nextButton.addEventListener('click', function () {
            updateCurrentRadio();
            // Di chuyển tới slide trước đó (hoặc về slide cuối cùng nếu đã ở slide đầu tiên)
            currentIndex = (currentIndex + 1 + radioButtons.length) % radioButtons.length;
            radioButtons[currentIndex].checked = true;
        });

        // Bắt sự kiện khi slider thay đổi radio button hiện tại
        radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', function () {
                currentIndex = index;
            });
        });