const ADMIN_ROLE = "ADMIN_ROLE";
const CHEF_ROLE = "CHEF_ROLE";
const WAITRESS_ROLE = "WAITRESS_ROLE";
const USER_ROLE = "USER_ROLE";
const ROLES = [CHEF_ROLE, WAITRESS_ROLE, ADMIN_ROLE, USER_ROLE] as const;

export type UserRole = typeof ROLES[number];

export {
  ROLES,
  CHEF_ROLE,
  WAITRESS_ROLE,
  ADMIN_ROLE,
  USER_ROLE,
}; 