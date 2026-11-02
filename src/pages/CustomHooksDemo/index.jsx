import useApi from "@/hooks/useApi";
import useToggle from "@/hooks/useToggle";
import styles from "./CustomHooksDemo.module.scss";

function CustomHooksDemo() {
    const theme = useToggle(false);
    const postsVisibility = useToggle(true);
    const usersVisibility = useToggle(true);

    const {
        data: postsData,
        loading: postsLoading,
        error: postsError,
        refetch: refetchPosts,
    } = useApi("https://jsonplaceholder.typicode.com/posts?_limit=5");

    const {
        data: usersData,
        loading: usersLoading,
        error: usersError,
        refetch: refetchUsers,
    } = useApi("https://jsonplaceholder.typicode.com/users?_limit=5");

    // Helper to extract name initials for avatars
    const getInitials = (name = "") =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

    return (
        <div
            className={styles.demoWrapper}
            data-theme={theme.value ? "dark" : "light"}
        >
            <div className={styles.container}>
                {/* Top Navigation Bar */}
                <header className={styles.topBar}>
                    <div className={styles.brand}>
                        <h1>Hooks Dashboard</h1>
                    </div>
                    <button
                        className={styles.themeToggle}
                        onClick={theme.toggle}
                    >
                        <span>{theme.value ? "☀️ Light" : "🌙 Dark"}</span>
                    </button>
                </header>

                {/* Dashboard Grid */}
                <div className={styles.grid}>
                    {/* Posts Section Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.titleWrapper}>
                                <h2>Posts</h2>
                                <span className={styles.countTag}>
                                    {postsVisibility.value && postsData
                                        ? postsData.length
                                        : 0}
                                </span>
                            </div>
                            <div className={styles.actions}>
                                <button
                                    className={styles.btn}
                                    onClick={postsVisibility.toggle}
                                >
                                    {postsVisibility.value ? "Hide" : "Show"}
                                </button>
                                <button
                                    className={`${styles.btn} ${styles.btnPrimary}`}
                                    onClick={() =>
                                        postsVisibility.setValue(true)
                                    }
                                >
                                    Force
                                </button>
                                <button
                                    className={`${styles.btn} ${styles.btnRefetch}`}
                                    onClick={refetchPosts}
                                >
                                    ↻ Refetch
                                </button>
                            </div>
                        </div>

                        <div className={styles.cardBody}>
                            {!postsVisibility.value ? (
                                <div className={styles.collapsedState}>
                                    <p>Posts section is currently hidden.</p>
                                    <button
                                        className={`${styles.btn} ${styles.btnPrimary}`}
                                        onClick={() =>
                                            postsVisibility.setValue(true)
                                        }
                                    >
                                        Show Posts
                                    </button>
                                </div>
                            ) : postsLoading ? (
                                <div className={styles.loadingState}>
                                    <span className={styles.spinner} /> Loading
                                    posts...
                                </div>
                            ) : postsError ? (
                                <div className={styles.errorState}>
                                    Error: {postsError}
                                </div>
                            ) : (
                                <div className={styles.postList}>
                                    {postsData?.map((post) => (
                                        <div
                                            key={post.id}
                                            className={styles.postItem}
                                        >
                                            <div className={styles.postHeader}>
                                                <span className={styles.idTag}>
                                                    #{post.id}
                                                </span>
                                                <h3>{post.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Users Section Card */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.titleWrapper}>
                                <h2>Users</h2>
                                <span className={styles.countTag}>
                                    {usersVisibility.value && usersData
                                        ? usersData.length
                                        : 0}
                                </span>
                            </div>
                            <div className={styles.actions}>
                                <button
                                    className={styles.btn}
                                    onClick={usersVisibility.toggle}
                                >
                                    {usersVisibility.value ? "Hide" : "Show"}
                                </button>
                                <button
                                    className={`${styles.btn} ${styles.btnPrimary}`}
                                    onClick={() =>
                                        usersVisibility.setValue(true)
                                    }
                                >
                                    Force
                                </button>
                                <button
                                    className={`${styles.btn} ${styles.btnRefetch}`}
                                    onClick={refetchUsers}
                                >
                                    ↻ Refetch
                                </button>
                            </div>
                        </div>

                        <div className={styles.cardBody}>
                            {!usersVisibility.value ? (
                                <div className={styles.collapsedState}>
                                    <p>Users section is currently hidden.</p>
                                    <button
                                        className={`${styles.btn} ${styles.btnPrimary}`}
                                        onClick={() =>
                                            usersVisibility.setValue(true)
                                        }
                                    >
                                        Show Users
                                    </button>
                                </div>
                            ) : usersLoading ? (
                                <div className={styles.loadingState}>
                                    <span className={styles.spinner} /> Loading
                                    users...
                                </div>
                            ) : usersError ? (
                                <div className={styles.errorState}>
                                    Error: {usersError}
                                </div>
                            ) : (
                                <div className={styles.userList}>
                                    {usersData?.map((user) => (
                                        <div
                                            key={user.id}
                                            className={styles.userItem}
                                        >
                                            <div className={styles.avatar}>
                                                {getInitials(user.name)}
                                            </div>
                                            <div className={styles.userInfo}>
                                                <span className={styles.name}>
                                                    {user.name}
                                                </span>
                                                <span className={styles.email}>
                                                    {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomHooksDemo;
