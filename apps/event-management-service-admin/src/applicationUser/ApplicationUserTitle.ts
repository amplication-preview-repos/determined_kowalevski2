import { ApplicationUser as TApplicationUser } from "../api/applicationUser/ApplicationUser";

export const APPLICATIONUSER_TITLE_FIELD = "firstName";

export const ApplicationUserTitle = (record: TApplicationUser): string => {
  return record.firstName?.toString() || String(record.id);
};
