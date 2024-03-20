document.getElementById('copyButton').addEventListener('click', function() {
    const address = 'G6nfBpQqTtXYRwnacQkYieGp8ycdod1wEPcjDNkBXfyh'; // Ваш адрес кошелька
    navigator.clipboard.writeText(address).then(function() {
        alert(`Address copied: ${address}`);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
