import React from 'react';
import { Button } from './Button';
import './nav.css';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';


interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Heading</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Login" />
            <Button primary size="small" onClick={onCreateAccount} label="SignUp" />
          </>
        )}
      </div>
    </div>
  </header>
);
