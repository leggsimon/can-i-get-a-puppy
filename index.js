const contentNode = document.querySelector('.n-layout__row.n-layout__row--content');
const topperNode = contentNode.querySelector('.topper');

const puppyNode = document.createElement('div');
puppyNode.innerHTML = `<link href="https://fonts.googleapis.com/css?family=Schoolbell" rel="stylesheet">
        <div style="text-align: center; font-family: Schoolbell, Comic Sans MS, cursive" data-trackable="puppy">
            <div style="margin-top: 10px; font-size: 40px; font-weight: 100;">
                CAN I <a href="https://twitter.com/bhgreeley/status/976459499920920576" data-trackable="tweet">PLEASE</a> GET A <a href="https://www.rspca.org.uk/getinvolved/donate/online" data-trackable="donate">PUPPY?!</a>
            </div>
            <div style="font-size: 18px; margin-left: 10%; font-weight: 100;">
                a <u>real</u><br/>one!
            </div>
        </div>`;

contentNode.insertBefore(puppyNode, topperNode);
