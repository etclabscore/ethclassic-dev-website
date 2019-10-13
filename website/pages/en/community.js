/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help or want to connect with the community?</h1>
          </header>
          <p>Ethereum Classic has an active community of organizations, developers, and supporters.</p>
          <ul>Chat
            <li><a target="_blank" href="https://discord.gg/S9AT3X2">Ethereum Classic Labs/ Core Discord</a></li>
            <li><a target="_blank" href="https://discord.gg/HW4GckH">Ethereum Classic Community Discord</a></li>
            <li><a target="_blank" href="https://t.me/etclabs">Ethereum Classic Labs Telegram</a></li>
            <li><a target="_blank" href="http://telegram.me/ethclassic">Ethereum Classic Community Telegram</a></li>
          </ul>
          <ul>Code
            <li><a target="_blank" href="https://github.com/etclabscore">Ethereum Classic Labs Core Github</a></li>
            <li><a target="_blank" href="https://github.com/ethereumclassic">Ethereum Classic Community Github</a></li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
