      function convertToJpeg(fileData, resultDiv) {
         var canvas = document.createElement("canvas");
         var ctx = canvas.getContext("2d");
         var img = new Image();

         img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            var jpegData = canvas.toDataURL("image/jpeg");
            var downloadLink = createDownloadLink(jpegData, "imagem.jpeg");

            resultDiv.appendChild(downloadLink);
         };

         img.src = fileData;
      }

      function convertToPng(fileData, resultDiv) {
         var canvas = document.createElement("canvas");
         var ctx = canvas.getContext("2d");
         var img = new Image();

         img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            var pngData = canvas.toDataURL("image/png");
            var downloadLink = createDownloadLink(pngData, "imagem.png");

            resultDiv.appendChild(downloadLink);
         };

         img.src = fileData;
      }

      function convertToPdf(fileData, resultDiv) {

         var canvas = document.createElement("canvas");
         var ctx = canvas.getContext("2d");
         var img = new Image();

         img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

         var pdfData = canvas.toDataURL("image/pdf");
         var downloadLink = createDownloadLink(pdfData, "arquivo.pdf");

         resultDiv.appendChild(downloadLink);

      }

      img.src = fileData;
      }

      function convertToMp4(fileData, resultDiv) {
         // Lógica de conversão para MP4

         // Exemplo com link de download fictício
         var mp4Data = "data:video/mp4;base64,XYZ...";
         var downloadLink = createDownloadLink(mp4Data, "video.mp4");

         resultDiv.appendChild(downloadLink);
      }

      function convertToAvi(fileData, resultDiv) {
         // Lógica de conversão para AVI

         // Exemplo com link de download fictício
         var aviData = "data:video/x-msvideo;base64,XYZ...";
         var downloadLink = createDownloadLink(aviData, "video.avi");

         resultDiv.appendChild(downloadLink);
      }

      function convertToMov(fileData, resultDiv) {
         // Lógica de conversão para MOV

         // Exemplo com link de download fictício
         var movData = "data:video/quicktime;base64,XYZ...";
         var downloadLink = createDownloadLink(movData, "video.mov");

         resultDiv.appendChild(downloadLink);
      }

      function convertToMkv(fileData, resultDiv) {
         // Lógica de conversão para MKV

         // Exemplo com link de download fictício
         var mkvData = "data:video/x-matroska;base64,XYZ...";
         var downloadLink = createDownloadLink(mkvData, "video.mkv");

         resultDiv.appendChild(downloadLink);
      }

      function convertToAvchd(fileData, resultDiv) {
         // Lógica de conversão para AVCHD

         // Exemplo com link de download fictício
         var avchdData = "data:video/avchd;base64,XYZ...";
         var downloadLink = createDownloadLink(avchdData, "video.avchd");

         resultDiv.appendChild(downloadLink);
      }

      function convertToFlv(fileData, resultDiv) {
         // Lógica de conversão para FLV

         // Exemplo com link de download fictício
         var flvData = "data:video/x-flv;base64,XYZ...";
         var downloadLink = createDownloadLink(flvData, "video.flv");

         resultDiv.appendChild(downloadLink);
      }

      function convertToMp3(fileData, resultDiv) {
         // Lógica de conversão para MP3

         // Exemplo com link de download fictício
         var mp3Data = "data:audio/mpeg;base64,XYZ...";
         var downloadLink = createDownloadLink(mp3Data, "audio.mp3");

         resultDiv.appendChild(downloadLink);
      }

      function convertToWav(fileData, resultDiv) {
         // Lógica de conversão para WAV

         // Exemplo com link de download fictício
         var wavData = "data:audio/wav;base64,XYZ...";
         var downloadLink = createDownloadLink(wavData, "audio.wav");

         resultDiv.appendChild(downloadLink);
      }

      function convertToWma(fileData, resultDiv) {
         // Lógica de conversão para WMA

         // Exemplo com link de download fictício
         var wmaData = "data:audio/mpeg;base64,XYZ...";
         var downloadLink = createDownloadLink(wmaData, "audio.wma");

         resultDiv.appendChild(downloadLink);
      }

      function convertToPcm(fileData, resultDiv) {
         // Lógica de conversão para PCM

         // Exemplo com link de download fictício
         var pcmData = "data:audio/mpeg;base64,XYZ...";
         var downloadLink = createDownloadLink(pcmData, "audio.pcm");

         resultDiv.appendChild(downloadLink);
      }

      function convertToFlac(fileData, resultDiv) {
         // Lógica de conversão para FLAC

         // Exemplo com link de download fictício
         var flacData = "data:audio/mpeg;base64,XYZ...";
         var downloadLink = createDownloadLink(flacData, "audio.flac");

         resultDiv.appendChild(downloadLink);
      }

      function createDownloadLink(fileData, fileName) {
         var downloadLink = document.createElement("a");
         downloadLink.href = fileData;
         downloadLink.download = fileName;
         downloadLink.textContent = "Baixar arquivo convertido";
         downloadLink.classList.add("btn-download");

         return downloadLink;
      }

      function handleConvertButtonClick(event) {
         event.preventDefault();

         var formatSelect = document.getElementById("formatSelect");
         var specificSelect = document.getElementById("specificSelect");
         var fileInput = document.getElementById("fileInput");
         var resultDiv = document.getElementById("result");

         if (formatSelect.value === "" || specificSelect.value === "" || !fileInput.files[0]) {
            alert("Por favor, preencha todos os campos");
            return;
         }

         var file = fileInput.files[0];
         var reader = new FileReader();

         reader.onload = function(event) {
            var fileData = event.target.result;

            if (formatSelect.value === "image") {
               if (specificSelect.value === "jpeg") {
                  convertToJpeg(fileData, resultDiv);
               } else if (specificSelect.value === "png") {
                  convertToPng(fileData, resultDiv);
               } else if (specificSelect.value === "pdf") {
                  convertToPdf(fileData, resultDiv);
               }
            } else if (formatSelect.value === "video") {
               if (specificSelect.value === "mp4") {
                  convertToMp4(fileData, resultDiv);
               } else if (specificSelect.value === "avi") {
                  convertToAvi(fileData, resultDiv);
               } else if (specificSelect.value === "mov") {
                  convertToMov(fileData, resultDiv);
               } else if (specificSelect.value === "mkv") {
                  convertToMkv(fileData, resultDiv);
               } else if (specificSelect.value === "avchd") {
                  convertToAvchd(fileData, resultDiv);
               } else if (specificSelect.value === "flv") {
                  convertToFlv(fileData, resultDiv);
               }
            } else if (formatSelect.value === "audio") {
               if (specificSelect.value === "mp3") {
                  convertToMp3(fileData, resultDiv);
               } else if (specificSelect.value === "wav") {
                  convertToWav(fileData, resultDiv);
               } else if (specificSelect.value === "wma") {
                  convertToWma(fileData, resultDiv);
               } else if (specificSelect.value === "pcm") {
                  convertToPcm(fileData, resultDiv);
               } else if (specificSelect.value === "flac") {
                  convertToFlac(fileData, resultDiv);
               }
            }
         };

         reader.readAsDataURL(file);
      }

      function handleFormatSelectChange(event) {
         var specificFormat = document.getElementById("specificFormat");

         if (event.target.value === "image") {
            specificFormat.style.display = "block";
            var specificSelect = document.getElementById("specificSelect");
            specificSelect.innerHTML = `
               <option disabled selected value="">Formato</option>
               <option value="jpeg">JPEG</option>
               <option value="png">PNG</option>
               <option value="pdf">PDF</option>
            `;
         } else if (event.target.value === "video") {
            specificFormat.style.display = "block";
            var specificSelect = document.getElementById("specificSelect");
            specificSelect.innerHTML = `
               <option disabled selected value="">Formato</option>
               <option value="mp4">MP4</option>
               <option value="avi">AVI</option>
               <option value="mov">MOV</option>
               <option value="mkv">MKV</option>
               <option value="avchd">AVCHD</option>
               <option value="flv">FLV</option>
            `;
         } else if (event.target.value === "audio") {
            specificFormat.style.display = "block";
            var specificSelect = document.getElementById("specificSelect");
            specificSelect.innerHTML = `
               <option disabled selected value="">Formato</option>
               <option value="mp3">MP3</option>
               <option value="wav">WAV</option>
               <option value="wma">WMA</option>
               <option value="pcm">PCM</option>
               <option value="flac">FLAC</option>
            `;
         } else {
            specificFormat.style.display = "none";
         }
      }

      var formatSelect = document.getElementById("formatSelect");
      formatSelect.addEventListener("change", handleFormatSelectChange);

      var convertButton = document.getElementById("uploadForm");
      convertButton.addEventListener("submit", handleConvertButtonClick);