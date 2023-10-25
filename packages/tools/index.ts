// 比较ios前面的版本是否比后面的版本要大或等于
// 1.3.1 > 1.3.0 或者 1.3 > 1.3
export const compareIOSVersions = (currentVersion: string, targetVersion: string) => {
    const parseVersion = version => version.split('.').map(Number);
    const parseCurrentVersion = parseVersion(currentVersion);
    const parseTargetVersion = parseVersion(targetVersion);
    const maxLength = Math.max(parseCurrentVersion.length, parseTargetVersion.length);
    for (let i = 0; i < maxLength; i++) {
        const part1 = parseCurrentVersion[i] || 0;
        const part2 = parseTargetVersion[i] || 0;
        if (part1 > part2) {
            return true;
        } else if (part1 < part2) {
            return false;
        }
    }
    return true;
}