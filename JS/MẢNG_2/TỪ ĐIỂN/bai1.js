let englishWords = ["hello", "world", "apple", "banana"];
let vietnameseWords = ["xin chào", "thế giới", "quả táo", "quả chuối"];

function searchWord() {
     let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let indexEnglish = englishWords.indexOf(searchInput);

    let indexVietnamese = vietnameseWords.indexOf(searchInput);

     let resultElement = document.getElementById("result");
    if (indexEnglish !== -1) {
          resultElement.textContent = "Tìm thấy: " + vietnameseWords[indexEnglish];
    } else if (indexVietnamese !== -1) {
 resultElement.textContent = "Tìm thấy: " + englishWords[indexVietnamese];
    } else {
         resultElement.textContent = "Không tìm thấy từ này.";
    }
}
