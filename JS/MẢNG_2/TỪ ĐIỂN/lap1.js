let englishWords = ["hello", "world", "apple", "banana"];
let vietnameseWords = ["xin chào", "thế giới", "quả táo", "quả chuối"];

function searchWord() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let resultElement = document.getElementById("result");

    let found = false;

    for (let i = 0; i < englishWords.length; i++) {
        if (englishWords[i] === searchInput) {
            resultElement.textContent = "Tìm thấy: " + vietnameseWords[i];
            found = true;
            break;  
        } else if (vietnameseWords[i] === searchInput) {
            resultElement.textContent = "Tìm thấy: " + englishWords[i];
            found = true;
            break;  
        }
    }

    if (!found) {
        resultElement.textContent = "Không tìm thấy từ này.";
    }
}
