/**
 * 校验操作权限
 * @param per
 * @param permissions
 */
export const useHasPermission = (per: string[], permissions: []) => {
  const allPermission = '*';
  if (per && per.length > 0) {
    return permissions.some((permission: string) => {
      return allPermission === permission || per.includes(permission);
    });
  }
  return true;
};
