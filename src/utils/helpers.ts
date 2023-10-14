export const getInitials = (name: string) => {
    const words = name.split(/\s+/);

    let initials = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            initials += word[0].toUpperCase();
        }
    }

    return initials;
};
