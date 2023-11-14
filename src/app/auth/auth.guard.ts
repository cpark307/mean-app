import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

export const authGuard: CanActivateFn = (): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const isAuth = authService.getIsAuth();

    if (!isAuth){
        router.navigate(['/auth/login']);
    }
    return isAuth;
  }