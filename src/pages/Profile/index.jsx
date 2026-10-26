import { useEffect, useState } from "react";

import styles from "./Profile.module.scss";

import avatar from "../../assets/images/placeholder.png";

function Profile() {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleChange = (e) => {
        const image = e.target.files[0];
        const currentPreview = URL.createObjectURL(image);
        setPreviewUrl((oldUrl) => {
            if (oldUrl) URL.revokeObjectURL(oldUrl);
            return currentPreview;
        });
    };

    useEffect(
        () => previewUrl && URL.revokeObjectURL(previewUrl),
        [previewUrl],
    );

    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <label className={styles.avatarLabel}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        hidden
                    />
                    <img
                        src={previewUrl || avatar}
                        alt="Avatar"
                        className={styles.avatarImage}
                    />
                </label>
                <span className={styles.uploadText}>Upload your avatar</span>
            </form>
        </div>
    );
}

export default Profile;
