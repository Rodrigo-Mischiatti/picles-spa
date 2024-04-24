import { Navigate, Outlet } from "react-router-dom"
import { useShelter } from "../../../pages/Home/useShelter"

export function AuthHOC() {
  const { data, isLoading } = useShelter()
  const canAccess = !!data?.shelterWhatsApp

  if (isLoading) null
  if (!canAccess) return <Navigate to="/admin" />

  return <Outlet />

} 