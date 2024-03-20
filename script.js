document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText('G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh').then(() => {
        alert('Address copied!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});
