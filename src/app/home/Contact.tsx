import React from 'react';
import styles from '@/app/components/Link.module.css';

export default function Contact() {
  const marginTopClassName = 'mt-8 md:mt-16';

  return (
    <div
      className="bg-pink p-[24px] flex justify-between flex-col"
      id="contact"
    >
      <div className="text-lg text-black">
        <div className={`${marginTopClassName} ${styles.linkItem}`}>
          <a href="mailto:emiliarosavdh@gmail.com">emiliarosavdh@gmail.com</a>
        </div>
        <div className={`${marginTopClassName} ${styles.linkItem}`}>
          <a
            href="https://github.com/rousah"
            target="_blank"
            className={styles.linkItem}
          >
            github.com/rousah
          </a>
        </div>
        <div className={marginTopClassName}>Amsterdam</div>
      </div>
      <div className="text-right text-2xl md:text-4xl">Contact</div>
    </div>
  );
}
