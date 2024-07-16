import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

export default function Transactions() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image
                src="/noavatar.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>2022-01-01</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/noavatar.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>2022-01-01</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}></div>
              <Image
                src="/noavatar.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>2022-01-01</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/noavatar.png"
                alt="user"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>2022-01-01</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
