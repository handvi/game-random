function playGame() {
    alert("Selamat datang di Game Tebak Angka!");

    let scorePlayer1 = 0;
    let scorePlayer2 = 0;

    let rounds = parseInt(prompt("Masukkan jumlah ronde: (minimal 1)"));
    while (isNaN(rounds) || rounds < 1) {
        rounds = parseInt(prompt("Masukkan jumlah ronde yang valid: (minimal 1)"));
    }

    for (let i = 1; i <= rounds; i++) {
        alert(`Ronde ${i}`);

        const randomNumber = Math.floor(Math.random() * 3) + 1;

        let guessPlayer1 = parseInt(prompt("Player 1, masukkan tebakan angka (1-3):"));
        while (isNaN(guessPlayer1) || guessPlayer1 < 1 || guessPlayer1 > 3) {
            guessPlayer1 = parseInt(prompt("Input tidak valid! Player 1, masukkan angka antara 1-3:"));
        }

        let guessPlayer2 = parseInt(prompt("Player 2, masukkan tebakan angka (1-3):"));
        while (isNaN(guessPlayer2) || guessPlayer2 < 1 || guessPlayer2 > 3) {
            guessPlayer2 = parseInt(prompt("Input tidak valid! Player 2, masukkan angka antara 1-3:"));
        }

        if (guessPlayer1 === randomNumber) {
            alert("Player 1 benar!");
            scorePlayer1++;
        } else {
            alert("Player 1 salah!");
        }

        if (guessPlayer2 === randomNumber) {
            alert("Player 2 benar!");
            scorePlayer2++;
        } else {
            alert("Player 2 salah!");
        }

        alert(`Angka sebenarnya adalah: ${randomNumber}`);
    }

    alert("Permainan selesai!");
    alert(`Skor akhir:\nPlayer 1: ${scorePlayer1}\nPlayer 2: ${scorePlayer2}`);

    if (scorePlayer1 > scorePlayer2) {
        alert("Selamat, Player 1 menang!");
    } else if (scorePlayer1 < scorePlayer2) {
        alert("Selamat, Player 2 menang!");
    } else {
        alert("Hasil seri, tidak ada pemenang!");
    }

    if (confirm("Mau main lagi?")) {
        playGame();
    } else {
        alert("Terima kasih sudah bermain!");
    }
}

playGame();
