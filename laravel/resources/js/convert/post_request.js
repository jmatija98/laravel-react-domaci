import {create} from './create_report';
import $ from 'jquery';
export function convert() {

    const report = create('aa', 'aa', 'aaa', 'aaaaa', 'aaaaaaaa');

    var data = {
        'text': report
    };

    var token = btoa('kascez:b9335427e0c8443499b9ee2f44b5de4e');
    $.ajax({
        type: 'POST',
        url: 'https://api.pdfcrowd.com/convert/',
        data: data,
        headers: {
            'Authorization': 'Basic ' + token
        },
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data, xhr) {
            var blob = new Blob([data], { type: 'application/pdf' });
            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob);
                return;
            }

            // For other browsers:
            // Create a link pointing to the ObjectURL containing the blob.
            const url = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = 'report.pdf';
            link.click();
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(url);
            }, 100);
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    });
};
