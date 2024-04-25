        document.addEventListener('DOMContentLoaded', function () {
            const quantitySelect = document.querySelector('.quantity-selector select');
            const minusButton = document.querySelector('.quantity-change.minus');
            const plusButton = document.querySelector('.quantity-change.plus');

            if (!quantitySelect || !minusButton || !plusButton) {
                console.log('One or more elements are not found:', {
                    quantitySelect,
                    minusButton,
                    plusButton
                });
                return;
            }

            minusButton.addEventListener('click', function () {
                if (quantitySelect.selectedIndex > 0) {
                    quantitySelect.selectedIndex--;
                    quantitySelect.dispatchEvent(new Event('change')); // Trigger change event
                }
            });

            plusButton.addEventListener('click', function () {
                if (quantitySelect.selectedIndex < quantitySelect.options.length - 1) {
                    quantitySelect.selectedIndex++;
                    quantitySelect.dispatchEvent(new Event('change')); // Trigger change event
                }
            });

            quantitySelect.addEventListener('change', function () {
                console.log('Quantity changed to:', this.value);
            });
        });
