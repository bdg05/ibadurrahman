document.addEventListener('DOMContentLoaded', function () {
    const formGabung = document.querySelector('#modalGabung form');
    const formTanyaUstadz = document.querySelector('#formTanyaUstadz');

    formGabung.addEventListener('submit', function (event) {
        event.preventDefault();
        const { nama, email, telepon } = formGabung.elements;

        alert(`Terima kasih, ${nama.value}. Anda telah berhasil mendaftar dengan email: ${email.value} dan nomor telepon: ${telepon.value}.`);
        formGabung.reset();
        $('#modalGabung').modal('hide');
    });

    formTanyaUstadz.addEventListener('submit', function (event) {
        event.preventDefault();
        const { namaPertanyaan, emailPertanyaan, pertanyaan } = formTanyaUstadz.elements;

        alert(`Terima kasih, ${namaPertanyaan.value}. Pertanyaan Anda telah berhasil dikirim. Kami akan segera menjawab melalui email: ${emailPertanyaan.value}.`);
        formTanyaUstadz.reset();
    });
});

