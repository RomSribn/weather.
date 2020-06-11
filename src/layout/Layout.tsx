import * as React from 'react';
import { ILayoutProps } from './interface';
import './Layout.scss';

const authorNameText: string = 'Roman Sribnyi';
const authorResourceLinkText: string = 'https://github.com/RomSribn';
const resourceNameText: string = 'Apixu';
const resourceLinkText: string = 'https://www.apixu.com/';

const layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => (
  <>
    {children}
    <footer className="footer">
      <p className="last-updated">Last updated at 12:00pm</p>
      <p>
        Created by
        <a
          href={authorResourceLinkText}
          title="github"
          rel="noopener noreferrer"
          target="_blank"
        >
          {authorNameText}
        </a>
        | Weather data from
        <a
          href={resourceLinkText}
          title="Apixu.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          {resourceNameText}
        </a>
      </p>
    </footer>
  </>
);

export { layout as Layout };
