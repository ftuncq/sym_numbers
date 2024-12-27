<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{
    public function __construct(private UrlGeneratorInterface $urlGenerator)
    {}

    public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }

        if (!$user->hasValidSubscription() && !in_array('ROLE_ADMIN', $user->getRoles())) {
            $renewalUrl = $this->urlGenerator->generate('app_subscription_renew');
            throw new CustomUserMessageAccountStatusException(
                sprintf(
                    'Votre abonnement a expiré. <a href="%s">Renouvelez-le ici</a>.',
                    $renewalUrl
                )
            );
        }
    }

    public function checkPostAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }
    }
}