REVOKE EXECUTE ON FUNCTION public.is_admin(uuid) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_admin() FROM authenticated;

-- Grant apenas para postgres/service_role implicitamente já tem
SELECT 1;