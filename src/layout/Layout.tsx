import './Layout.scss';
import * as React from 'react';
import { useStores } from 'mobx/stores';
import { ILayoutProps } from './interface';
import { observer } from 'mobx-react-lite';

const authorNameText: string = ' Roman Sribnyi ';
const authorResourceLinkText: string = 'https://github.com/RomSribn';
const resourceNameText: string = ' Openweather ';
const resourceLinkText: string = 'https://openweathermap.org/';

const layout: React.FC<ILayoutProps> = observer(
  ({ children }: ILayoutProps) => {
    const {
      siteSettingsStore: { lastUpdatedTime },
    } = useStores();

    return (
      <>
        {children}
        <footer className="footer">
          <p className="last-updated">Last updated at {lastUpdatedTime}</p>
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
  },
);

export { layout as Layout };
