<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SubscriptionController extends AbstractController
{
    #[Route('/subscription/renew', name: 'app_subscription_renew')]
    public function renew(): Response
    {
        return $this->render('subscription/index.html.twig', [
        ]);
    }
}
